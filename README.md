# Design Patterns

In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.

## Creational Patterns

### Abstract Factory Pattern

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

#### Real Life Example

As a phone distributer, one can buy dumb phones and smart phones from a manufacturer where the manufacturer could be a Samsung or Vodaphone depending on the type of phone distributer you are.

#### When to use?

When there are interrelated dependencies with not-that-simple creation logic involved.

### Builder Pattern

Builder is a creational design pattern that lets you produce different types and representations of an object using the same building process. Builder allows constructing complex objects step by step.

#### Real Life Example

As a manufacturer of automatic tranmission cars, one can manufacture a car with various different aspects such as type of engine or number of seats but it will still remain an automatic transmission car.

#### When to use?

When there could be several flavors of an object and to avoid the constructor telescoping.

### Factory Method Pattern

Factory Method is a creational design pattern that provides an interface for creating objects in superclass, but allow subclasses to alter the type of objects that will be created.

#### Real Life Example

As a hiring manager, one would like to employ a full time employee or a part time employee depending on what position is available.

#### When to use?

When the client doesn't know what exact sub-class it might need.
