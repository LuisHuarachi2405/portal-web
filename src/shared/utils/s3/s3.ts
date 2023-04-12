/* eslint-disable class-methods-use-this */
import AWS from 'aws-sdk'

const BUCKETNAME = process.env.NEXT_PUBLIC_AWS_S3_BUCKET as string
const BUCKETREGION = process.env.NEXT_PUBLIC_AWS_S3_BUCKETREGION as string
const IDENTITYPOOLID = process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITYPOOLID as string
const URL_COGNITO = process.env.NEXT_PUBLIC_AWS_COGNITO_URL as string

export class UploadS3 {
  s3: AWS.S3

  constructor(private token: string) {
    AWS.config.region = BUCKETREGION
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IDENTITYPOOLID,
      Logins: {
        [URL_COGNITO]: this.token,
      },
    })
    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: BUCKETNAME },
    })
  }

  checkCredentials = () =>
    new Promise((resolve, reject) => {
      AWS.config.getCredentials((errs) => {
        if (errs) reject(new Error('The credentials are not correct, token expired'))
        else resolve('Sucess')
      })
    })

  uploadS3File = (base64PDF: string, keyName: string, contentType: string) => {
    const buffer = Buffer.from(base64PDF, 'base64')
    return new Promise((resolve, reject) => {
      this.s3.upload(
        {
          Key: keyName,
          Bucket: BUCKETNAME,
          Body: buffer,
          ACL: 'private',
          ContentType: contentType,
        },
        (error, data) => {
          if (error) reject(error)
          else resolve(data)
        }
      )
    })
  }

  getS3File = (keyName: string) =>
    new Promise((resolve, reject) => {
      this.s3.getObject(
        {
          Bucket: BUCKETNAME,
          Key: keyName,
        },
        (err, data) => {
          if (err) {
            reject(err)
          } else {
            // eslint-disable-next-line no-lonely-if
            if (data && data.Body) {
              resolve(data.Body)
            } else {
              reject(new Error('Error could not open the file'))
            }
          }
        }
      )
    })

  blobPartToFile = (blobPartFile: BlobPart) => {
    const blob = new Blob([blobPartFile], { type: 'application/pdf' })
    const blobUrl = URL.createObjectURL(blob)
    window.open(blobUrl, '_blank')
  }

  printPdf = (blobPartFile: BlobPart) => {
    const w = 850
    const h = 700
    const title = 'Print document'
    const blob = new Blob([blobPartFile], { type: 'application/pdf' })
    const blobUrl = URL.createObjectURL(blob)
    const left = window.screen.width / 2 - w / 2
    const top = window.screen.height / 2 - h / 2
    window.open(
      blobUrl,
      title,
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    )
  }

  convertBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result as string)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
}
