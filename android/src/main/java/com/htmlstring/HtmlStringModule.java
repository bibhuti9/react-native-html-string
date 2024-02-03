package com.htmlstring;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import android.content.Context;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.text.Html;
import android.util.Log;
import java.util.Random;


@ReactModule(name = HtmlStringModule.NAME)
public class HtmlStringModule extends ReactContextBaseJavaModule {
  public static final String NAME = "HtmlString";

  public HtmlStringModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void convertHTML(String html, com.facebook.react.bridge.Callback callback) {
      CharSequence output = Html.fromHtml(html);
      String htmlOutput = output.toString();
      callback.invoke(htmlOutput);
  }

}
