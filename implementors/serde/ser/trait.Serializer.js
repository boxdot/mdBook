(function() {var implementors = {};
implementors["handlebars"] = ["impl&lt;W, F&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='serde_json/ser/struct.Serializer.html' title='serde_json::ser::Serializer'>Serializer</a>&lt;W, F&gt; <span class='where'>where F: <a class='trait' href='serde_json/ser/trait.Formatter.html' title='serde_json::ser::Formatter'>Formatter</a>, W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='serde_json/value/struct.Serializer.html' title='serde_json::value::Serializer'>Serializer</a>",];
implementors["serde_json"] = ["impl&lt;W, F&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='serde_json/ser/struct.Serializer.html' title='serde_json::ser::Serializer'>Serializer</a>&lt;W, F&gt; <span class='where'>where W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>, F: <a class='trait' href='serde_json/ser/trait.Formatter.html' title='serde_json::ser::Formatter'>Formatter</a></span>","impl <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='serde_json/value/struct.Serializer.html' title='serde_json::value::Serializer'>Serializer</a>",];
implementors["toml"] = ["impl <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='toml/struct.Encoder.html' title='toml::Encoder'>Encoder</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()