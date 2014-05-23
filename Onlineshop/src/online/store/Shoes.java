package online.store;

public class Shoes extends Product{
	String[] brands={"Lui_Vuitton","DG","Gucci","Chanel"};
	int[] values={20000,23000,14000,16000};
	public int[] counts={15,7,12,3};
public Shoes(){
	setValues(values);
	setBrands(brands);
	setQuality("Bark");
	setCounts(counts);
	}

}
