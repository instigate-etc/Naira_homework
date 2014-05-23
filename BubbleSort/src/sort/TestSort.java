package sort;

import static org.junit.Assert.*;

import org.hamcrest.core.IsEqual;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TestSort {

	int[] a = { 9, 5, 6, 3, 8, 7, 22, 59, 63, 87, 5, 41, 1 };

	@Before
	public void setUp() throws Exception {

	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test_returncount() {
		System.out.println("Test array counts...");
		// InsertionSort S = new InsertionSort() ;
		assertTrue(MainBubbleSorting.bubbleSort(a).length == 13);

		// assertTrue((S.insertion_sort(a)).equals("1")) ;
	}

	@Test
	public void test_returnArray() {
		System.out.println("Test true sorting...");
		int[] a1 = { 1, 3, 5, 5,6,7, 8, 9, 22, 41, 59, 63, 87 };
				// InsertionSort S = new InsertionSort() ;
		Assert.assertThat(MainBubbleSorting.bubbleSort(a),
				(IsEqual.equalTo(a1)));

		// assertTrue((S.insertion_sort(a)).equals("1")) ;
	}
}
