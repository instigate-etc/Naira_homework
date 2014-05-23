package am.num1_1000;

public class Tiv1_99num {
	private int sum_miavor_length;
	int sum_tasnavor_length;
	int sum_tasniak_length;
	int s;

	String[] miavor = { "one", "two", "three", "four", "five", "six", "seven",
			"eight", "nine" };
	String[] tasnavor = { "eleven", "twelve", "thirteen", "fourteen",
			"fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
	String[] tasniak = { "ten", "twenty", "thirty", "forty", "fifty", "sixty",
			"seventy", "eighty", "ninety" };

	public int sum_miavor_count() {

		// sum 1-9
		for (String m : miavor) {
			sum_miavor_length = sum_miavor_length + m.length();
		}
		// sum 1-19
		for (String m1 : tasnavor) {
			sum_tasnavor_length = sum_tasnavor_length + m1.length();
		}
		// sum 10,20,..90
		for (String m2 : tasniak) {
			sum_tasniak_length = sum_tasniak_length + m2.length();
		}
		// length 1-99
		return sum_miavor_length;
	}
	// length 1-99
	public int count_num() {
		s = sum_miavor_length + sum_tasnavor_length + sum_tasniak_length + 9
				* (sum_tasniak_length - 3) + 8 * sum_miavor_length;
		return s;
	}

}
