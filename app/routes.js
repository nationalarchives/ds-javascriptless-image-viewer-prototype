//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const path = require('path')
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Serve Universal Viewer built assets (CSS, UMD bundle, and lazy-loaded chunks)
// from the installed npm package. Available at /universalviewer/...
govukPrototypeKit.requests.serveDirectory(
  '/universalviewer',
  path.join(__dirname, '..', 'node_modules', 'universalviewer', 'dist')
)

// Add your routes here
// Optional quality comes after the record id so a bare id is never read as a quality.
// /image-viewer-enhanced-list/C14017174
// /image-viewer-enhanced-list/C14017174/mid
// /image-viewer-enhanced-list/C14017174/low
const manifestQualities = ['low', 'mid']

router.get('/image-viewer-enhanced-list/:recordId/:quality?', (req, res) => {
  const quality = manifestQualities.includes(req.params.quality)
    ? req.params.quality
    : undefined

  res.render('image-viewer-enhanced-list', {
    recordId: req.params.recordId,
    quality
  })
})
