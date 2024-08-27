package com.example;

import org.junit.jupiter.api.extension.ExecutionCondition;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.ConditionEvaluationResult;

import org.junit.platform.launcher.TestExecutionListener;

public class AllTestsExtension implements TestExecutionListener, ExecutionCondition  {
    @Override
    public ConditionEvaluationResult evaluateExecutionCondition(ExtensionContext context) {
        // Get the test class name and the test method name
        String testClassName = context.getTestClass().get().getName();
        System.out.println("Redefine is skipping test class: " + testClassName);

        return ConditionEvaluationResult.disabled(testClassName + " skipped by Redefine");
    }
}
