package online.store;

import java.util.Scanner;

public class Store {
	public String input;
	int k;
	Product bag = new Bag();
	Product shoes = new Shoes();
	Product product = new Product();
	Scanner input1 = new Scanner(System.in);
	double total_value = 0;
	int yes = 0;
	public void shopper() {
		buy_and_sell(bag,"Bag");
		buy_and_sell(shoes,"Shoes");
	}
	private void ifbe(int yes) {
		if (yes == 0) {
			System.out.println("Please we havn't this Brand");
		}
	}
	public void buy_and_sell(Product p,String brend_name){
		k=0;
		yes=0;
		System.out.print("Brand "+brend_name+" ");
		String s = input1.next();
		System.out.print("Count "+brend_name+" ");
		String s1 = input1.next();
		for (String t1 : p.getBrands()) {
			if (s.equals(t1)) {

				if(p.getCounts()[k]<Integer.parseInt(s1)){
					System.out.println("Not thet count....");
				}
				else{
					p.setCounts(new int[] { p.getCounts()[0],
							p.getCounts()[1],
							p.getCounts()[k] - Integer.parseInt(s1),
							p.getCounts()[3] });
					System.out.println(p.getCounts()[k]);
					total_value=total_value+Integer.parseInt(s1)*p.getValues()[k];
				}
			yes = 1;
		
			}
			k = k + 1;
		}
		ifbe(yes);
		
	}
	

	public void store() {
		int shoes_count = 0;
		int bag_count = 0;
		System.out
				.println("-------------------------Online_shop_product------------------------");
		System.out
				.println("-------------------------Online_shop_product_Shoes------------------------");
		while (shoes_count < shoes.getCounts().length) {
			System.out.println(shoes.getBrands()[shoes_count] + " "
					+ shoes.getCounts()[shoes_count] + " " + shoes.getValues()[shoes_count]);
			shoes_count++;
		}
		System.out
				.println("-------------------------Online_shop_product_Bags------------------------");
		while (bag_count < bag.getCounts().length) {
			System.out.println(bag.getBrands()[bag_count] + " " + bag.getCounts()[bag_count]
					+ " " + bag.getValues()[bag_count]);
			bag_count++;
		}
		 System.out.println(total_value);
	}

}
