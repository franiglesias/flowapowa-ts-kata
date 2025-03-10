# FlowaPowa

This is an exercise to practice **branch by abstraction** and other related techniques to manage big changes with [Small Safe Steps](https://www.eferro.net/p/small-safe-steps-3s-workshop.html).

## Goal of the exercise

To learn practical techniques to work in Safe Small Steps when performing significant changes in a code base, with zero downtime.

## Recommendations

* Read "The problem" carefully and understand what is asked.
* Check the "Setting up the environment for the challenge" before starting to code.
* You cannot commit if tests are failing. Install the pre-commit hook to enforce this rule.
* Repeat the exercise several times to automate the thinking process

## The problem

FlowaPowa is an application to create flower bouquets. It depends on a library to get the latest prices for flowers and other elements, like Foliage and Ribbons, from the _Worldwide Flower Market_. Sadly, this library was deprecated, and it will be declared _end of life_ real soon.

So, we will need to migrate to a new library that will give us access to the same prices, but with a new interface.

The problem is that we need to execute the migration during the most important season of the year. We want to achieve zero downtime to avoid losing sales.

The architecture of the application is pretty decent, but it has some flaws. The deprecated library was used with little care and code is tightly coupled to it. You could find other code smells as well, because original programmer was not so proficient.

### Run examples

You can run an example in the CLI by running:

```shell
npm run flowapowa 'rose:15;daisy:5;foliage:3'
```

The recipe syntax is:

```
productName:quantity[;anotherProduct:quantity]...
```

These are the supported products to build a bouquet:

* rose
* daisy
* lily
* sunflower
* tulip
* foliage
* ribbon

If you don't pass a recipe the program will fail. Maybe you can add some code to prevent this and fail gracefully.

### The challenge

We want zero downtime, so we should migrate the application to use the new library without breaking the app. Fortunately we have a fairly comprehensive test suite, and any change that could break it should be noticed by the tests.

Also, we want to use Trunk Based Development and small batches. We need to follow a strategy to isolate the changes needed and be able to make the transition without breaking the pipeline.

YOU CANNOT COMMIT IF TESTS ARE NOT PASSING

```shell
npm run test:flowapowa
```

### Summary

* We want to move from `DeprecatedPriceProvider` to `NewVendorProductProvider`.
* We cannot commit any change if tests are RED. We should revert the changes.
* We should commit as soon as possible.

### Recommendations

* Identify and isolate the parts of the code that need change
* Prepare the code base to accept the needed changes in advance
* Smaller steps are way better if you need to revert your changes

### Some caveats and design decisions

* We don't use currency for the sake of simplicity
* Interface of FlowaPowa::main() accepts recipe strings like "rose:12;daisy:15;foliage:1;"
* Flower names in singular are used as id of the products
* Sort of Hexagonal Architecture, ports are named from the kind of conversation they establish with the outer world
* The new Vendor lives in the `lib` folder to simulate a third party library


## Reference documents

* [Fowler, M: Branch by abstraction](https://martinfowler.com/bliki/BranchByAbstraction.html)
* [Branch by abstraction website](https://www.branchbyabstraction.com/)


## Setting up the environment for the challenge

### Install pre-commit hook

Add the provided `pre-commit` hook to allow **git** to run the all the _flowapowa_ tests before sending the commit. If the commit breaks the tests it will notify you, and it will stop the commit. Alternatively, you can use the [LimitedWIP plugin](https://plugins.jetbrains.com/plugin/7655-limited-wip).

Run this from the root of the project to copy the hook to the `.git/hooks` folder. It will overwrite your existing pre-commit script if any.

```bash
cp hooks/pre-commit .git/hooks/pre-commit
```

Make sure that `.git/hooks/pre-commit` is executable

```bash
chmod +x .git/hooks/pre-commit
```

**IntelliJ Notes:** This should be enough to run the pre-commit hook from the Commit window in **IntelliJ**. Make sure that the "Run Git Hooks" option is checked. This option will not show if no executable pre-commit script exits. Alternatively you could use the plugin LimitedWIP to set a _Test && Commit || Revert_ scenario. 

To remove the pre-commit hook simply.

```shell
rm .git/hooks/pre-commit
```

### Running the tests

```shell
npm run test
```
