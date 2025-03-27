import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  	private int[] elements;
  	public int maximumDifference;

	// Add your code here
    Difference(int[] arr){
        this.elements = arr;
    }
    public void computeDifference(){
        int large = 0, small = 999;
        for(int i = 0; i < elements.length ; i++){
            if(elements[i] > large) large = elements[i];
            if(elements[i] < small) small = elements[i];
        }
        maximumDifference = Math.abs((large-small));
    }

} // End of Difference class

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}

/*
Input:
3
1 2 5

Output:
4


*/
