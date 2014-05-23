package sort_hajord;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class HajordakanMin {

static Scanner input_number = new Scanner(System.in);
static String number = input_number.next();
static int middle;
static int c;
static int t = 1;
static int y=0;
String b;
	public static void main(String[] args) throws IOException {
		int ep = args.length;
		try {
			BufferedReader reader = new BufferedReader(new FileReader("/home/student/Desktop/file.txt"));
		    String line;
            String ligne;
			while ((ligne=reader.readLine())!=null){
                System.out.println(ligne);
          
            }
			reader.close(); 
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		int bp = 0;
		next_sort(args);
		binary_search1(args, number, bp, ep);
	}
	
	public static String[] next_sort(String[] args){
		for (int i = 0; i < args.length ; i++) {
			for (int j = i+1; j < args.length; j++) {
			if (Integer.parseInt(args[i]) >Integer.parseInt(args[j])) {
			
				int c = Integer.parseInt(args[i ]);
				args[i] = args[j];
				args[j] = Integer.toString(c);
			}
		}
			for (int f = 0; f < args.length; f++) {
				System.out.print(args[f] + " ");
			}

		System.out.print("\n");
		
	}
		return args;
	}

	public static void binary_search1(String[] args, String number, int bp,
	int ep) {
		middle = (int) (ep + bp) / 2;
while (ep >= bp) {
	if (Integer.parseInt(number) == Integer.parseInt(args[middle])) {
		System.out.println("This number index is found  "+middle);
		return;
	}else
	if (Integer.parseInt(number) > Integer.parseInt(args[middle])) {
		binary_search1(args, number, middle + 1, ep);
	} else if (Integer.parseInt(number) < Integer
			.parseInt(args[middle])) {
		binary_search1(args, number, bp, middle - 1);
	}

}
System.out.println("-1");
}

}
