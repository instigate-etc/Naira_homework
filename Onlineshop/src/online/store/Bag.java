package online.store;

public class Bag extends Product{
	public String grpan;
	String[] brands={"Lui_Vuitton","Gucci","DG","Chanel"};
	int[] values={20000,15000,18000,16000};
	public int[] counts={15,7,8,3};
	
	public Bag(){
		setValues(values);
		setBrands(brands);
		setQuality("Zamsh");
		setCounts(counts);
		}



	
}
