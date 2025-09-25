'use client';

export default function PaymentCenterPage() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="lg:col-span-2 bg-white border rounded-md p-4">
					<h2 className="text-lg font-semibold">Payment Center</h2>
					<p className="text-sm text-gray-600 mt-1">View balances and request withdrawals.</p>
					<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
						<div className="rounded-md p-4 bg-gray-100">
							<div className="text-xs text-gray-600">Referral Earning</div>
							<div className="text-3xl font-bold">$00.00</div>
						</div>
						<div className="rounded-md p-4 bg-gray-100">
							<div className="text-xs text-gray-600">Course Sale Earning</div>
							<div className="text-3xl font-bold">$00.00</div>
						</div>
						<div className="rounded-md p-4 bg-yellow-100 border border-yellow-300">
							<div className="text-xs">Grand Total</div>
							<div className="text-3xl font-extrabold">$0.00</div>
						</div>
					</div>

					<form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
						<label className="block">
							<div className="mb-1">Amount</div>
							<input className="w-full border rounded px-2 py-1" placeholder="$" />
						</label>
						<label className="block">
							<div className="mb-1">Payment Method</div>
							<select className="w-full border rounded px-2 py-1">
								<option>UPI</option>
								<option>Bank Transfer</option>
								<option>PayPal</option>
							</select>
						</label>
						<label className="block">
							<div className="mb-1">Account/UPI ID</div>
							<input className="w-full border rounded px-2 py-1" placeholder="example@upi" />
						</label>
						<div className="sm:col-span-3">
							<button type="button" className="px-4 py-1.5 rounded bg-blue-600 text-white">Request Withdrawal</button>
						</div>
					</form>
				</div>

				<div className="bg-white border rounded-md p-4">
					<h3 className="font-semibold">Recent Transactions</h3>
					<table className="w-full mt-2 text-sm">
						<thead className="bg-gray-100">
							<tr>
								<th className="p-2 text-left">Date</th>
								<th className="p-2 text-left">Type</th>
								<th className="p-2 text-left">Amount</th>
								<th className="p-2 text-left">Status</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: 5 }).map((_, i) => (
								<tr key={i} className="odd:bg-white even:bg-gray-50">
									<td className="p-2">-</td>
									<td className="p-2">Withdrawal</td>
									<td className="p-2">$0.00</td>
									<td className="p-2">Pending</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				{[
					{ title: 'Tally prime Full Course', img: '/E1.png' },
					{ title: 'Web Designing Full Course', img: '/seo.png' },
					{ title: 'DSP Special Earning Course', img: '/dsp.png' },
					{ title: 'Tally prime Full Course', img: '/F1.png' },
					{ title: 'Web Designing Full Course', img: '/G1.png' },
				].map((c, idx) => (
					<div key={idx} className="bg-white border rounded-md p-3 text-center">
						<div className="h-28 w-full bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
							<img src={c.img} alt={c.title} className="h-full object-contain" />
						</div>
						<div className="text-sm font-semibold">{c.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}


