import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filterStore', () => {
    const filtersList = ref(['chairs', 'tables'])

    function addValueToFilterList(value: string) {
        filtersList.value.push(value)
    }
    return { addValueToFilterList, filtersList }
})
