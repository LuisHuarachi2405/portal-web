import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const permissionSchema = zod.object({ idPermission: zod.string().nonempty() })

const modulePermissionFormSchema = zod.object({
  idOu: zod.string(),
  idModule: zod.string(),
  idPermissions: zod.array(permissionSchema).min(1),
  idStatus: zod.string().optional(),
})

export const modulePermissionFormResolver = zodResolver(modulePermissionFormSchema)
