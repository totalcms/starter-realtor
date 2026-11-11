/*
	Live result for the mortgage calculator (partials/mortgage-calculator.twig).
	Without this file the form still works: Calculate reloads the page and the
	template does the same sum. This only saves the reload.
*/
export function calculator(form) {
	const out = (name) => form.querySelector(`[data-out="${name}"]`);
	const money = new Intl.NumberFormat(form.dataset.locale || 'en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
	});
	const value = (name) => parseFloat(form.elements[name].value) || 0;

	const update = () => {
		const price = value('price');
		const loan = price * (1 - Math.min(value('down'), 100) / 100);
		const r = value('rate') / 100 / 12;
		const n = value('term') * 12;
		const pi = r > 0 ? (loan * r) / (1 - (1 + r) ** -n) : loan / n;
		const tax = (price * parseFloat(form.dataset.taxRate)) / 100 / 12;
		const ins = parseFloat(form.dataset.insurance) / 12;
		out('total').textContent = money.format(Math.round(pi + tax + ins));
		out('pi').textContent = money.format(Math.round(pi));
		out('tax').textContent = money.format(Math.round(tax));
		out('ins').textContent = money.format(Math.round(ins));
		out('loan').textContent = money.format(Math.round(loan));
	};

	form.addEventListener('input', update);
	form.querySelector('[data-calc-submit]')?.setAttribute('hidden', '');
}
