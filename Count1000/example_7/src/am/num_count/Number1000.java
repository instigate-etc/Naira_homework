/**
Qani tar e anrajeshet 1-ic 1000-tver@ grelu hamar (anglerenov)
ete grem 1-ic 5-@ angleren tarerov kstacvi (one, two, three, four, five), ev hetevabar tareri qanaki gumar@ klini 3 + 3 + 5 + 4 + 4 = 19
HARC: qani tar anhrajesht klini 1-ic 1000-@(one thousand)1000-@ neraryal?
nshum: chhashveq "bacakner@" tveri aranq@ orinqk 342 tiv@ (three hundred and forty-two) klini 23 tar, 115-tiv@ (one hundred and fifteen) 20 tar."and"-@ Britanakan anglerenov hamarvum em tveri kazman chisht masnik.
 */
package am.num_count;

public class Number1000 {
	int sum_miavor_length;
	int sum_tasnavor_length;
	int sum_tasniak_length;
	int s; 
	int sum_count;
	String[] miavor = { "one", "two", "three", "four", "five", "six", "seven",
			"eight", "nine" };
	String[] tasnavor = { "eleven", "twelve", "thirteen", "fourteen",
			"fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
	String[] tasniak = { "ten", "twenty", "thirty", "forty", "fifty", "sixty",
			"seventy", "eighty", "ninety" };
	String hundred = "hundred";
	String thousand = "thousand";
	String and = "and";

	public void count_num() {
		//sum 1-9
		for (String m : miavor) {
			sum_miavor_length = sum_miavor_length + m.length();
		}
		//sum 1-19
		for (String m1 : tasnavor) {
			sum_tasnavor_length = sum_tasnavor_length + m1.length();
		}
		//sum 10,20,..90
		for (String m2 : tasniak) {
			sum_tasniak_length = sum_tasniak_length + m2.length();
		}
		// length 1-99
		s = sum_miavor_length + sum_tasnavor_length + sum_tasniak_length + 9
				* (sum_tasniak_length - 3) + 8 * sum_miavor_length;
		//length 1-1000
		System.out.println("Length 1-1000 of language English");
		sum_count = (100 * sum_miavor_length) + (900 * hundred.length()) + (10 * s)
				+ 891 * and.length() + miavor[0].length() + thousand.length();
		System.out.println(sum_count);
	
	}

}
