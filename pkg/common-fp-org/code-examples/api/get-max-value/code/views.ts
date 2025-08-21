type Metric = {
  views: number
  avgRequestTime: number
}
type Metrics = Record<string, Metric>
const metrics: Metrics = {
  mon: { views: 5128, avgRequestTime: 0.42 },
  tue: { views: 4790, avgRequestTime: 0.39 },
  wed: { views: 4845, avgRequestTime: 0.41 },
  thr: { views: 5401, avgRequestTime: 0.45 },
  fri: { views: 5326, avgRequestTime: 0.42 },
}

const getViews = get('views')<Metric>
const getViewMetrics = mapValues(getViews)<Metrics>
const getMaxViews = compose([getViewMetrics, getMaxValue])
const maxViews = getMaxViews(metrics)
console.log(maxViews) // is 5401
