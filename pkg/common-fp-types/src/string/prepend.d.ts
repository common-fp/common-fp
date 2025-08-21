export default function <S extends string>(
  start: S
): {
  <B extends string>(base: B): `${S}${B}`
  (base: string): `${S}${string}`
}
