import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
            printf();
    }

    private static void printf() {
        Scanner sc = new Scanner(System.in);
        System.out.println("================================");
        for(int i=0; i<3; i++){
            String s1 = sc.next();
            int x = sc.nextInt();
            System.out.format("%-15s%03d%n", s1, x); // see https://docs.oracle.com/javase/tutorial/java/data/numberformat.html for formatting rules
        }
        System.out.println("================================");

    }

}