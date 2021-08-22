package org.zhoupb.jdk11.epsilon;

import java.util.ArrayList;
import java.util.List;

public class EpsilonDemo {
    public static void main(String[] args) {
        List<Garbage> list = new ArrayList<>();
        boolean flag = true;
        int count = 0;
        while (flag) {
            list.add(new Garbage());
            if (count++ == 500) {
                list.clear();
            }
        }
    }
}

class Garbage {
    private double d1 = 1;
    private double d2 = 2;

    @Override
    protected void finalize() throws Throwable {
        System.out.println(this + " collecting");
    }
}
