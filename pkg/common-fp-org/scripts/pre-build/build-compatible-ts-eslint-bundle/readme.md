## Build Compatible typescript-eslint Bundle

This script's purpose is to take the bundled output of
https://github.com/common-fp/typescript-eslint/tree/common-fp/packages/website-eslint
and make it compatible with our website editor.

Note our typescript-eslint fork has a github action which builds releases of the
bundle. We fetch the bundle from those releases.

Once we fetch the bundle, the only transformation we need is to remove
references to window. This is due to behavior in Nextjs, which seems to
translate window expressions such that they are executed in web workers. I
couldn't figure out a way to disable this behavior, so removing them was the
next best option. If we're able to prevent next.js from translating those
expressions then we should be able to rely on the bundle directly.
