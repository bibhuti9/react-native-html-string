import React
import UIKit

@objc(HtmlString)
class HtmlString: NSObject {

  
  @objc func convertHTML(_ html: String, callback: @escaping RCTResponseSenderBlock) {
      if let attributedString = try? NSAttributedString(data: html.data(using: .utf8)!, options: [.documentType: NSAttributedString.DocumentType.html, .characterEncoding: String.Encoding.utf8.rawValue], documentAttributes: nil) {
          let plainText = attributedString.string
          callback([plainText])
      } else {
          callback([""])
      }
  }

  @objc func constantsToExport() -> [AnyHashable : Any]! {
      return ["convertHtml": "value"] 
  }

  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }

}
