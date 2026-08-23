import { normalizePriorityForDisplay } from "@/utils/task/priority-utils";

describe("normalizePriorityForDisplay", () => {
	it("normalizes named and numeric priorities", () => {
		const cases: Array<[string | number, number]> = [
			["lowest", 1],
			["low", 2],
			["medium", 3],
			["high", 4],
			["highest", 5],
			["4", 4],
			[3, 3],
		];

		for (const [raw, expected] of cases) {
			expect(normalizePriorityForDisplay(raw)).toBe(expected);
		}
	});

	it("clamps display priorities to the supported scale", () => {
		expect(normalizePriorityForDisplay(0)).toBe(1);
		expect(normalizePriorityForDisplay(8)).toBe(5);
	});
});
