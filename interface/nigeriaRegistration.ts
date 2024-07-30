export interface NigeriaRegistrationI {
  cacnumber: string
  organization_name: string
  organization_website?: string
  organization_address?: string
  admin_name: string
  admin_work_email: string
  admin_username: string
  workspace_url: string
  password?: string
  otp?: string
}

export interface NigeriaStepsProps {
  current?: number
  setCurrent?: React.Dispatch<React.SetStateAction<number>>
  formData?: NigeriaRegistrationI
  setFormData?: React.Dispatch<React.SetStateAction<NigeriaRegistrationI>>
}
