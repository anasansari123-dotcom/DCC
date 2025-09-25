'use client';

export default function AccountSettingsPage() {
	return (
		<div className="space-y-6">
			<div className="bg-white border rounded-md p-4">
				<h2 className="text-lg font-semibold">Account Settings</h2>
				<form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
					<label className="block">
						<div className="mb-1">Full Name</div>
						<input className="w-full border rounded px-2 py-1" defaultValue="MOHD ASIF K." />
					</label>
					<label className="block">
						<div className="mb-1">Email</div>
						<input type="email" className="w-full border rounded px-2 py-1" defaultValue="user@example.com" />
					</label>
					<label className="block">
						<div className="mb-1">Phone</div>
						<input className="w-full border rounded px-2 py-1" defaultValue="+91 00000 00000" />
					</label>
					<label className="block">
						<div className="mb-1">Country</div>
						<input className="w-full border rounded px-2 py-1" defaultValue="India" />
					</label>
					<div className="sm:col-span-2 flex gap-2 mt-2">
						<button type="button" className="px-4 py-1.5 rounded bg-blue-600 text-white">Save Changes</button>
						<button type="button" className="px-4 py-1.5 rounded border">Reset</button>
					</div>
				</form>
			</div>

			<div className="bg-white border rounded-md p-4">
				<h3 className="font-semibold">Change Password</h3>
				<form className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
					<input type="password" placeholder="Current password" className="border rounded px-2 py-1" />
					<input type="password" placeholder="New password" className="border rounded px-2 py-1" />
					<input type="password" placeholder="Confirm new password" className="border rounded px-2 py-1" />
					<div className="sm:col-span-3">
						<button type="button" className="px-4 py-1.5 rounded bg-gray-900 text-white">Update Password</button>
					</div>
				</form>
			</div>
		</div>
	);
}


