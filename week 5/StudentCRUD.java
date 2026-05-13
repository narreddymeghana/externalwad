import java.sql.*;
import java.util.Scanner;

public class StudentCRUD {

    static final String URL = "jdbc:mysql://localhost:3306/studentdb";
    static final String USER = "root";
    static final String PASS = "Meghana@123"; // your password

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            Connection con = DriverManager.getConnection(URL, USER, PASS);

            while (true) {
                System.out.println("\n1. Insert\n2. View\n3. Update\n4. Delete\n5. Exit");
                int choice = sc.nextInt();

                switch (choice) {

                    case 1:
                        System.out.print("Enter name: ");
                        String name = sc.next();
                        System.out.print("Enter age: ");
                        int age = sc.nextInt();

                        PreparedStatement ps1 = con.prepareStatement(
                                "INSERT INTO students(name, age) VALUES (?, ?)");
                        ps1.setString(1, name);
                        ps1.setInt(2, age);
                        ps1.executeUpdate();
                        System.out.println("Inserted successfully!");
                        break;

                    case 2:
                        Statement st = con.createStatement();
                        ResultSet rs = st.executeQuery("SELECT * FROM students");

                        while (rs.next()) {
                            System.out.println(rs.getInt("id") + " "
                                    + rs.getString("name") + " "
                                    + rs.getInt("age"));
                        }
                        break;

                    case 3:
                        System.out.print("Enter ID to update: ");
                        int uid = sc.nextInt();
                        System.out.print("Enter new name: ");
                        String newName = sc.next();
                        System.out.print("Enter new age: ");
                        int newAge = sc.nextInt();

                        PreparedStatement ps2 = con.prepareStatement(
                                "UPDATE students SET name=?, age=? WHERE id=?");
                        ps2.setString(1, newName);
                        ps2.setInt(2, newAge);
                        ps2.setInt(3, uid);
                        ps2.executeUpdate();
                        System.out.println("Updated successfully!");
                        break;

                    case 4:
                        System.out.print("Enter ID to delete: ");
                        int did = sc.nextInt();

                        PreparedStatement ps3 = con.prepareStatement(
                                "DELETE FROM students WHERE id=?");
                        ps3.setInt(1, did);
                        ps3.executeUpdate();
                        System.out.println("Deleted successfully!");
                        break;

                    case 5:
                        System.exit(0);

                    default:
                        System.out.println("Invalid choice");
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}