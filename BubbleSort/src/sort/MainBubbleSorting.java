package sort;

import java.util.Scanner;

public class MainBubbleSorting {

	static Scanner input_number = new Scanner(System.in);
	static int number = input_number.nextInt();;
	static int middle;
	static int y = 0;
	static int sort_count;
	static MainBubbleSorting h = new MainBubbleSorting();

	public static void main(String[] args) {
		System.out.print("number: ");
		
		// TODO Auto-generated method stub
		bubbleSort(parse_int(args));
		printBubbleSort(bubbleSort(parse_int(args)));
		choseSearchMetod(bubbleSort(parse_int(args)));

	}

	private static void printBubbleSort(int[] args) {
		System.out.print("---BUBBLE SORT---"+"\n");
		for (int f = 0; f < args.length; f++) {
			System.out.print(args[f] + " ");
		}
		System.out.print("\n" + "----------------" + "\n" + "sort counts="
				+ sort_count + "\n");
	}

	public static int[] parse_int(String[] a) {

		int intarray[] = new int[a.length];
		for (int i = 0; i < a.length; i++) {
			intarray[i] = Integer.parseInt(a[i]);
		}
		return intarray;

	}

	public static int[] bubbleSort(int[] args) {
		int c;
		int j;
		sort_count = 0;
		boolean t = true;
		while (t == true) {

			t = false;
			j = 0;

			for (int i = 1; i < args.length - j; i++) {
				if (args[i - 1] > args[i]) {
					t = true;
					c = args[i - 1];
					args[i - 1] = args[i];
					args[i] = c;
					j = i;
				}
				sort_count++;
			}

		}

		return args;
	}

	public static int binarySearch(int[] args, int number) {
		int ep = args.length - 1;
		int bp = 0;
		while (ep >= bp) {
			middle = (int) (ep + bp) / 2;
			if (number == args[middle]) {
				return middle;
			} else if (number > args[middle]) {
				bp = middle + 1;
			} else if (number < args[middle]) {
				ep = middle - 1;

			}

		}
		return -1;
	}

	private static int rekursivBinarySearch(int[] args, int number, int bp,
			int ep) {
		// TODO Auto-generated method stub
		middle = (int) (ep + bp) / 2;
		while (ep > bp) {
			if (number == args[middle]) {
				return middle;
			} else if (number > args[middle]) {
				rekursivBinarySearch(args, number, middle + 1, ep);
			} else {
				rekursivBinarySearch(args, number, bp, middle - 1);
			}

		}
		return -1;
	}

	public static void choseSearchMetod(int[] args) {
		System.out.println("Choes 1 2");
		int chose = input_number.nextInt();
		if (chose == 1) {
			binarySearch(bubbleSort(args), number);
			System.out.println("This is BinarySearch"+"\nThis number index is found  "
					+ binarySearch(args, number));
		} else if (chose == 2) {
			int ep = args.length - 1;
			int bp = 0;
			rekursivBinarySearch(args, number, bp, ep);
			System.out.println("This is RecursivBinarySearch"+"\nThis number index is found  "
					+ rekursivBinarySearch(args, number, bp, ep));
		}

	}

}
