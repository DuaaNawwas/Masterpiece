import React from "react";

export default function PaymentHistoryTable() {
	return (
		<div class="overflow-x-auto relative w-11/12 lg:w-full">
			<table class=" mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="py-3 px-6">
							Date
						</th>
						<th scope="col" class="py-3 px-6">
							Number of people
						</th>
						<th scope="col" class="py-3 px-6">
							Meals per week
						</th>
						<th scope="col" class="py-3 px-6">
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							1-10-2022 to 1-11-2022
						</th>
						<td class="py-4 px-6">2</td>
						<td class="py-4 px-6">6</td>
						<td class="py-4 px-6">$100</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
