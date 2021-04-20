SELECT MAX(salary) AS Maior_Salario FROM hr.employees;

SELECT MAX(salary) - MIN(salary) AS 'Diferença Maior e menor Salario' FROM hr.employees;

SELECT job_id, AVG(salary) AS Media_Salários FROM hr.employees
GROUP BY job_id
ORDER BY Media_Salários DESC;

SELECT SUM(salary) AS Folha_PG FROM hr.employees;

SELECT
	ROUND(MAX(salary), 2) AS Maior_Salário,
    ROUND(MIN(salary), 2) AS Menor_Salário,
    ROUND(SUM(salary), 2) AS Folha_Total,
    ROUND(AVG(salary), 2) AS Média_Salários
FROM hr.employees;

SELECT COUNT(*) FROM hr.employees
WHERE job_id = 'IT_PROG';

SELECT job_id, SUM(salary) AS Valor_Total_PG FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) AS Valor_Total_PG FROM hr.employees
WHERE job_id = 'IT_PROG';

SELECT job_id, SUM(salary) AS Valor_Total_PG FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY Valor_Total_PG DESC;

SELECT AVG(salary), COUNT(*) FROM hr.employees
GROUP BY department_id HAVING COUNT(*) > 10;

SELECT * FROM hr.employees;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = CONCAT('777', RIGHT(phone_number, 9))
WHERE phone_number LIKE '515%';

SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;

SELECT UCASE(first_name) FROM hr.employees;

SELECT first_name, hire_date FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS Dias_Empregado FROM hr.employees;



