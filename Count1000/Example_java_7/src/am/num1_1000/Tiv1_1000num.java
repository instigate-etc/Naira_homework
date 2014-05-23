package am.num1_1000;

public class Tiv1_1000num extends Tiv1_99num{
	String hundred = "hundred";
	String thousand = "thousand";
	String and = "and";
	int sum_count;
	//length 1-1000
	public void total_count_num() {
		System.out.println("Length 1-1000 of language English");
		sum_count= (100 *sum_miavor_count()) + (900 * hundred.length()) 
				+ 891 * and.length()+ (10 * count_num()) + miavor[0].length() + thousand.length();
		System.out.println(sum_count);
	}

}
