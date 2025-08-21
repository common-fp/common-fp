export default function <E extends string>(
  end: E
): {
  <B extends string>(base: B): `${B}${E}`
  (base: string): `${string}${E}`
}
