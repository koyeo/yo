module github.com/koyeo/nest

go 1.13

require (
	github.com/BurntSushi/toml v0.3.1
	github.com/gen2brain/beeep v0.0.0-20190719094215-ece0cb67ca77
	github.com/godbus/dbus v4.1.0+incompatible // indirect
	github.com/gopherjs/gopherjs v0.0.0-20190915194858-d3ddacdb130f // indirect
	github.com/gopherjs/gopherwasm v1.1.0 // indirect
	github.com/gozelle/_exec v0.0.0-20220502065043-c0bc3c581457 // indirect
	github.com/gozelle/_fs v0.0.0-20220502065325-0247f9f3079f // indirect
	github.com/koyeo/snowflake v0.0.0-20210608015607-9634a808f637
	github.com/nu7hatch/gouuid v0.0.0-20131221200532-179d4d0c4d8d // indirect
	github.com/pkg/sftp v1.13.4
	github.com/shopspring/decimal v1.2.0
	github.com/spf13/cobra v1.3.0
	github.com/stretchr/testify v1.7.0
	github.com/tadvi/systray v0.0.0-20190226123456-11a2b8fa57af // indirect
	github.com/ttacon/chalk v0.0.0-20160626202418-22c06c80ed31
	github.com/urfave/cli/v2 v2.3.0
	github.com/webview/webview v0.0.0-20210330151455-f540d88dde4e
	golang.org/x/crypto v0.0.0-20220427172511-eb4f295cb31f
	golang.org/x/net v0.0.0-20211112202133-69e39bad7dc2
	gopkg.in/toast.v1 v1.0.0-20180812000517-0a84660828b2 // indirect
	gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b // indirect
)

//replace github.com/gozelle/_exec latest => ../_exec
//replace github.com/gozelle/_fs latest => ../_fs
