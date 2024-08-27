package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith(AllTestsExtension.class)
public class SimpleTest {

    @Test
    void testPass() {
        // something
        assertEquals(5, 5, "test pass");
    }

    @Test
    void testFail() {
        assertEquals(5, 4, "test fails");
    }

    @Disabled("skipped test")
    @Test
    void testSkipped() {
        assertEquals(5, 0, "test skipped");
    }
}