# a script to replicate a file
import shutil

file_path = "/home/yuvals/TestRepo/cypress/e2e/basic_tests/basic_test.cy.js"

for i in range(1, 1000):
    new_file_path = file_path.replace(".cy.js","")
    shutil.copy(file_path, new_file_path + str(i) + ".cy.js")