package org.zhoupb.jdk11.string;

import java.io.FileInputStream;
import java.io.IOException;

public class StringDemo {
    public static void main(String[] args) throws IOException {
        //test1();
        //test2();
        test3();
    }

    public static void test1() {
        String str = "  \t  \r\n 　 ";
        // 是否都是空白字符
        System.out.println(str.isBlank());

        str = "  \t  \r\n abc \t　";
        // 去除首尾空白，含半角、全角空白
        String strip = str.strip();
        System.out.println(strip);
        System.out.println(strip.length());
        // 去除首尾空白，全角不行
        String trim = str.trim();
        System.out.println(trim);
        System.out.println(trim.length());

        // 去除首部的空白
        String stripLeading = str.stripLeading();
        System.out.println(stripLeading);
        System.out.println(stripLeading.length());
        // 去除尾部的空白
        String stripTrailing = str.stripTrailing();
        System.out.println(stripTrailing);
        System.out.println(stripTrailing.length());
    }

    public static void test2() {
        String str = "Java";
        // 复制5次
        String repeat = str.repeat(5);
        System.out.println(repeat);

        str = "A\nB\nC";
        // 行统计
        long count = str.lines().count();
        System.out.println(count);
    }

    public static void test3() throws IOException {
        FileInputStream fis = new FileInputStream("src/org/zhoupb/jdk11/string/StringDemo.java");
        byte[] buffer = new byte[fis.available()];
        fis.read(buffer);
        fis.close();
        String str = new String(buffer);
        // 分行输出
        str.lines().forEach(System.out::println);
    }
}
