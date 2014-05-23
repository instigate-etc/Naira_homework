package online.store;


public class Shopper {
	private
	String name;
	private String city;
	public Shopper(String name,String city){
		this.setName(name);
		this.setCity(city);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
}