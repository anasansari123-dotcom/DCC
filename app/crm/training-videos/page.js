'use client';

export default function TrainingVideosPage() {
	const moreVideos = [
		{ title: 'School Management Excel Dashboard', meta: 'Learn Power BI • 2 years ago', thumb: '/seos.jpg' },
		{ title: 'Power BI Tutorial for Beginners', meta: 'Learn Power Query • 3 years ago', thumb: '/googles.jpg' },
		{ title: 'How to use Microsoft Power BI', meta: 'Learn Power BI • 2 years ago', thumb: '/seos.jpg' },
		{ title: 'Power BI Dashboard Tips', meta: 'Learn Power BI • 2 years ago', thumb: '/googles.jpg' },
	];

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="lg:col-span-2 bg-white border rounded-md overflow-hidden">
					<div className="aspect-video bg-black">
						<iframe
							title="Intro to DSP"
							className="w-full h-full"
							src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>
					<div className="p-3 border-t">
						<div className="font-semibold text-sm">#1st Day | About ~ What is DSP (Digital Starter Pack)</div>
						<div className="mt-2 flex items-center gap-2 text-sm">
							<button className="px-3 py-1 rounded-full bg-gray-900 text-white">Join</button>
							<button className="px-3 py-1 rounded-full border">Subscribe</button>
							<button className="px-3 py-1 rounded-full border">Share</button>
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<div className="text-sm font-semibold">More Videos</div>
					<div className="bg-white border rounded-md divide-y">
						{moreVideos.map((v, i) => (
							<div key={i} className="flex gap-3 p-2">
								<div className="w-28 h-16 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
									<img src={v.thumb} alt={v.title} className="h-full object-cover" />
								</div>
								<div className="min-w-0">
									<div className="text-sm font-medium truncate">{v.title}</div>
									<div className="text-xs text-gray-500 truncate">{v.meta}</div>
								</div>
							</div>
						))}
					</div>
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


