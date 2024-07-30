export const transforDataForSelection = (
  valueKey: string,
  labelKey: string,
  data: Record<string, any>[]
) => {
  return data.map((dataPoint) => {
    return {
      label: dataPoint[labelKey] as string,
      value: dataPoint[valueKey] as string,
    }
  })
}
