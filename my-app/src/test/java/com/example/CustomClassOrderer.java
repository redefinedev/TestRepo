package com.example;
import java.util.ArrayList;
import java.util.Collections;

import org.junit.jupiter.api.ClassDescriptor;
import org.junit.jupiter.api.ClassOrderer;
import org.junit.jupiter.api.ClassOrdererContext;

import java.util.List;

public class CustomClassOrderer implements ClassOrderer {
    @Override
    public void orderClasses(ClassOrdererContext context) {
        List<String> testClasses = new ArrayList<String>();
        List<? extends ClassDescriptor> classDescriptors = context.getClassDescriptors();
        for (ClassDescriptor classDescriptor : classDescriptors) {
            testClasses.add(classDescriptor.getTestClass().getName());
        }
        System.out.println("Redefine discovered the following test classes: " + testClasses);
        System.out.println("Redefine reordering test classes, reverse order...");
        Collections.reverse(context.getClassDescriptors());
    }
}
