package org.zhoupb.jdk11.inputstream;

import java.io.FileOutputStream;
import java.io.IOException;

public class InputStreamDemo {
    public static void main(String[] args) {
        new InputStreamDemo().test1();
    }

    public void test1() {
        var classLoader = this.getClass().getClassLoader();
        try (
                var is = classLoader.getResourceAsStream("file1.txt");
                var os = new FileOutputStream("file2.txt");
        ) {
            is.transferTo(os);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
