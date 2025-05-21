"use strict"

export default class ApiManager {
	constructor(factsNumbers) {
		this.api = `https://catfact.ninja/facts?limit=${factsNumbers}`
	}

	async getFacts() {

		try {
			const response = await fetch(this.api)
			console.log(response)

			if (!response.ok) throw new Error("The server is not responding.")

			const data = await response.json()
			console.log(data)
			console.log(data.data)

			return data.data.map(el => el.fact)
		} catch (error) {
			throw error
		}
	}
}