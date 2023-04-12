import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const permissionSchema = zod.object({ idPermission: zod.string().nonempty() })

const rolePermissionFormSchema = zod.object({
  idOu: zod.string(),
  idRole: zod.string(),
  idPermissions: zod.array(permissionSchema).min(1),
  idStatus: zod.string().optional(),
})

export const rolePermissionFormResolver = zodResolver(rolePermissionFormSchema)
