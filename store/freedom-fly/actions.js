export async function getFreedomFly({commit}) {
    try {
        const freedomFly = await this.$axios.$get('http://10.8.2.23/api/ru/freedom-fly')
        const freedomFlyRes = await freedomFly.data
        commit('freedomFlyInfo', freedomFlyRes[0].translation)
    } catch (error) {
        throw new Error(`Ошибка получения страницы freedom fly: ${JSON.stringify(error)}`)
    }
}
