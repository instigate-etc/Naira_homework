package online.store;

public class Product {
private
String brands[];
String quality;
private int counts[];
private int values[];



public String getQuality() {
	return quality;
}
public void setQuality(String quality) {
	this.quality = quality;
}

public int[] getCounts() {
	return counts;
}
public void setCounts(int counts[]) {
	this.counts = counts;
}
public String[] getBrands() {
	return brands;
}
public void setBrands(String brands[]) {
	this.brands = brands;
}
public int[] getValues() {
	return values;
}
public void setValues(int values[]) {
	this.values = values;
}
}