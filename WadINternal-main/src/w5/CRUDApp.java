package w5;

import java.sql.*;
import java.util.Scanner;

public class CRUDApp {

    static final String URL = "jdbc:mysql://localhost:3306/studentdb";
    static final String USER = "root";
    static final String PASSWORD = "Anjali@123";

    static Connection con;
    static Scanner sc = new Scanner(System.in);

    // ✅ CONNECT DATABASE
    static void connect() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("✅ Connected to MySQL successfully");
        } catch (Exception e) {
            System.out.println("❌ Database Connection Failed!");
            e.printStackTrace();
        }
    }

    // ✅ CHECK CONNECTION BEFORE USING
    static boolean checkConnection() {
        if (con == null) {
            System.out.println("❌ Connection not established!");
            return false;
        }
        return true;
    }

    // ✅ CREATE TABLE (AUTO)
    static void create() {
        if (!checkConnection()) return;

        try {
            Statement stmt = con.createStatement();
            stmt.executeUpdate(
                "CREATE TABLE IF NOT EXISTS Students(" +
                "RNO INT PRIMARY KEY, " +
                "NAME VARCHAR(20) NOT NULL, " +
                "MARK1 INT, MARK2 INT, MARK3 INT)"
            );
            System.out.println("✅ Table Ready!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ INSERT
    static void insert() {
        if (!checkConnection()) return;

        try {
            System.out.print("Enter Roll Number: ");
            int id = sc.nextInt();

            System.out.print("Enter Name: ");
            String str = sc.next();

            System.out.print("Enter Marks (3 subjects): ");
            int m1 = sc.nextInt(), m2 = sc.nextInt(), m3 = sc.nextInt();

            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO Students VALUES(?,?,?,?,?)"
            );

            ps.setInt(1, id);
            ps.setString(2, str);
            ps.setInt(3, m1);
            ps.setInt(4, m2);
            ps.setInt(5, m3);

            ps.executeUpdate();
            System.out.println("✅ Record Inserted Successfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ VIEW
    static void view() {
        if (!checkConnection()) return;

        try {
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Students");

            System.out.println("\nID\tName\tMarks");

            while (rs.next()) {
                System.out.println(
                    rs.getInt(1) + "\t" +
                    rs.getString(2) + "\t[" +
                    rs.getInt(3) + "," +
                    rs.getInt(4) + "," +
                    rs.getInt(5) + "]"
                );
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ UPDATE
    static void update() {
        if (!checkConnection()) return;

        try {
            System.out.print("Enter Roll Number to Update: ");
            int rno = sc.nextInt();

            System.out.print("Enter new Name: ");
            String name = sc.next();

            PreparedStatement ps = con.prepareStatement(
                "UPDATE Students SET NAME = ? WHERE RNO = ?"
            );

            ps.setString(1, name);
            ps.setInt(2, rno);

            int rows = ps.executeUpdate();

            if (rows > 0)
                System.out.println("✅ Record Updated Successfully");
            else
                System.out.println("⚠️ Record Not Found");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ DELETE
    static void delete() {
        if (!checkConnection()) return;

        try {
            System.out.print("Enter Roll Number to Delete: ");
            int rno = sc.nextInt();

            PreparedStatement ps = con.prepareStatement(
                "DELETE FROM Students WHERE RNO = ?"
            );

            ps.setInt(1, rno);

            int rows = ps.executeUpdate();

            if (rows > 0)
                System.out.println("✅ Record Deleted Successfully");
            else
                System.out.println("⚠️ Record Not Found");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ MAIN METHOD
    public static void main(String[] args) {

        connect();

        // 🔥 STOP if DB not connected
        if (con == null) {
            System.out.println("❌ Exiting program due to DB failure");
            return;
        }

        create(); // optional but useful

        while (true) {
            System.out.println("\n1.Insert  2.View  3.Update  4.Delete  5.Exit");
            System.out.print("Enter choice: ");
            int ch = sc.nextInt();

            switch (ch) {
                case 1 -> insert();
                case 2 -> view();
                case 3 -> update();
                case 4 -> delete();
                case 5 -> {
                    System.out.println("Exiting...");
                    try { con.close(); } catch (Exception e) {}
                    return;
                }
                default -> System.out.println("Invalid choice!");
            }
        }
    }
}