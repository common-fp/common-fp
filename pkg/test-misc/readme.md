# Test Repo

I'm not sure what to name this. It tests Common FP in ways that don't belong in
any individual package. For instance, tstyche doesn't yet allow inheriting, so
I have a test that makes sure all the tstyche configs contain certain
properties. It also contains tests to confirm tree-shaking behavior
when bundling, and that requiring and importing work as expected.
