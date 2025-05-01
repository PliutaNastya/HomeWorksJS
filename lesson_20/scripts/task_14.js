"use strict"

// Задача 14. Розробити форму для введення логіна і пароля. Кнопка буде активною тільки тоді, коли буде задано логін і пароль.

// Розробити компонент і він має бути незалежним
// Тобто при натисканні на кнопку вона має не відправляти форму, а генерувати подію, наприклад completed, і ми вже самі вирішуємо що з цим робити

class LoginForm {
	constructor() {

	}
	// renderLogin() {
	// 	const loginContainer = document.createElement('div')

	// 	const label = document.createElement('label')
	// 	label.innerText = 'Login'

	// 	const loginInp = document.createElement('input')
	// 	label.append(loginInp)
	// 	// так як нам треба запам'ятати цей логін інпут, то ми робимо наступне:
	// 	this.loginInp = loginInp

	// 	loginContainer.append(label)

	// 	return loginContainer
	// }
	// renderPassword() {
	// 	const passwordContainer = document.createElement('div')

	// 	const label = document.createElement('label')
	// 	label.innerText = 'Password'

	// 	const passwordInp = document.createElement('input')
	// 	passwordInp.type = 'password'
	// 	label.append(passwordInp)
	// 	// так як нам треба запам'ятати цей логін інпут, то ми робимо наступне:
	// 	this.passwordInp = passwordInp

	// 	passwordContainer.append(label)

	// 	return passwordContainer
	// }
	// render(containerSelector) {
	// 	const formContainer = document.createElement('div')

	// 	formContainer.append(this.renderLogin())
	// 	formContainer.append(this.renderPassword())

	// 	if (containerSelector) {
	// 		document.querySelector(containerSelector).append(formContainer)
	// 	}

	// 	return formContainer
	// }

	onSend(event) {
		const customEvent = new CustomEvent('completed', {
			detail: {
				login: this.loginInp.value,
				password: this.passInp.value,
			},
			bubbles: true,
		})
		event.target.dispatchEvent(customEvent)

	}

	renderInpEl(labelText, inpType) {
		const inpContainer = document.createElement('div')

		const label = document.createElement('label')
		label.innerText = labelText

		const inpEl = document.createElement('input')
		inpEl.type = inpType
		label.append(inpEl)

		inpContainer.append(label)

		return { inpContainer, inpEl }
	}
	render(containerSelector) {
		const formContainer = document.createElement('div')

		const { inpContainer: loginContainer, inpEl: loginInput } = this.renderInpEl('Login', 'text')
		formContainer.append(loginContainer)
		this.loginInp = loginInput

		const { inpContainer: passContainer, inpEl: passInput } = this.renderInpEl('Password', 'password')
		formContainer.append(passContainer)
		this.passInp = passInput


		const btn = document.createElement('button')
		btn.innerText = 'Login'
		// щоб this завжди вказував на цей об'єкт
		btn.onclick = this.onSend.bind(this)
		formContainer.append(btn)

		if (containerSelector) {
			document.querySelector(containerSelector).append(formContainer)
		}

		this.$el = formContainer

		return formContainer
	}
}


window.onload = () => {
	const f1 = new LoginForm()
	f1.render('#cnt')
	f1.$el.addEventListener('completed', (e) => console.log(e.detail))
}