export const FILTER_ACTIONS = {
  APPLY_FILTERS: 'FILTERS/APPLY_FILTERS'
}

export const applyFilter = (filtersData) => {
  return {
    type: FILTER_ACTIONS.APPLY_FILTERS,
    payload: filtersData
  }
}