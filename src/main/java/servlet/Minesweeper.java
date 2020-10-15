package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Minesweeper
 */
@WebServlet(description = "Minesweeper", urlPatterns = { "/Minesweeper" , "/Minesweeper.do"}, initParams = {@WebInitParam(name="id",value="1"),@WebInitParam(name="name",value="venkat")})
public class Minesweeper extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String HTML_START="<html>\n"
			+ "<head>\n"
			+ "	<title>\n"
			+ "		test\n"
			+ "	</title>\n"
			+ "	<link rel=\"stylesheet\" href=\"style.css\">\n"
			+ "	<script src=\"https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js\"></script>\n"
			+ "	<script src=\"sketch.js\"></script>\n"
			+ "	<script src=\"cell.js\"></script>\n"
			+ "</head>\n"
			+ "<body>";
	public static final String HTML_END="</body></html>";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Minesweeper() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
//		Date date = new Date();
		out.println(HTML_START + HTML_END);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}