export default function <K>(key: K): <V>(aMap: ReadonlyMap<K, V>) => V
