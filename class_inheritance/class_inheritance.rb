require 'byebug'

class Employee
  attr_reader :name, :title, :salary, :boss
  def initialize(name, title, salary, boss = nil)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    @salary * multiplier
  end

  def boss=(manager)
    @boss = manager
  end

end

class Manager < Employee
  attr_reader :employees
  def initialize(name, title, salary, boss = nil)
    @employees = []
    super
  end

  def bonus(multiplier)
    total_bonus = 0
    @employees.each do |employee|
      if employee.is_a?(Manager)
        total_bonus += employee.salary
        employee.employees.each do |subemployee|
          total_bonus += subemployee.salary
          # byebug
        end
      else
      total_bonus += employee.salary
      end
    end
    total_bonus * multiplier
  end

  def add_employee(employee)
    @employees << employee
    employee.boss=(self)
  end

end


ned = Manager.new("ned", "founder", 1_000_000)
darren = Manager.new("darren", "TA manager", 78_000)
shawna = Employee.new("shawna", "TA", 12_000)
david = Employee.new("david", "TA", 10_000)
ned.add_employee(darren)
darren.add_employee(shawna)
darren.add_employee(david)

p ned.bonus(5)
p darren.bonus(4)
